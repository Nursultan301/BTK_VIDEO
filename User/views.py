from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth import login, logout, authenticate
from django.http import JsonResponse

from .forms import UserRegisterForm, UserLoginForm


def logout_system(request):
    """ Выход  """
    logout(request)
    return redirect('sign_in')


def sign_in(request):
    """ Авторизатция & Регистрация """
    if request.POST:
        form = UserRegisterForm(request.POST)
        sign_form = UserLoginForm(request.POST)
        if sign_form.is_valid():
            user = sign_form.get_user()
            login(request, user)
            return redirect('home')
        elif form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Вы успешно зарегистрировались')
            return redirect('home')
        else:
            messages.error(request, 'Ошибка регистрации')
    else:
        form = UserRegisterForm()
        sign_form = UserLoginForm()
    return render(request, 'user/sign_in.html', {"form": form, "sign_form": sign_form})


def login_validator(request):
    context, data = {'success': False, 'is_authenticated': False, 'errors': False}, request.POST
    form = UserLoginForm(None, data)
    if not request.user.is_authenticated:
        if form.is_valid():
            user_cache = authenticate(request, username=data.get('username'), password=data.get('password'))
            if user_cache is not None:
                login(request, user_cache)
                context['success'] = True
        else:
            context['errors'] = form.errors
    else:
        context['is_authenticated'] = True
    return JsonResponse(context)


def register_validator(request):
    context = {'success': False, 'is_authenticated': False}
    form = UserRegisterForm(request.POST)
    if not request.user.is_authenticated:
        if form.is_valid():
            user = form.save()
            login(request, user)
            context['success'] = True
        else:
            context['errors'] = form.errors
    else:
        context['is_authenticated'] = True
    return JsonResponse(context)

