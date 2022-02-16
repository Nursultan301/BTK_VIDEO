from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, UsernameField
from django.contrib.auth.models import User


class UserRegisterForm(UserCreationForm):
    """ Форма для регистрации """
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

    def clean_email(self):
        email = self.cleaned_data["email"]
        if User.objects.filter(email__iexact=email).exists():
            raise forms.ValidationError("Пользователь с таким адресом электронной почты уже существует")
        return email


class UserLoginForm(AuthenticationForm):
    """ Форма для авторизации """
    username = UsernameField()
    password = forms.CharField()
