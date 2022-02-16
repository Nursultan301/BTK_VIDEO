from django.shortcuts import render, get_object_or_404, redirect, reverse
from django.views.generic import View, DetailView, ListView
from django.http import HttpResponse

from .models import Lesson, Discipline, Speciality


class HomeView(View):
    def get(self, request, *args, **kwargs) -> HttpResponse():
        posts = Lesson.objects.all()
        specialities = Speciality.objects.all()
        return render(request, 'lesson/index.html', {"posts": posts, "specialities": specialities})


class DetailSpecialityView(DetailView):
    model = Speciality
    template_name = "lesson/speciality_detail.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['specialities'] = Speciality.objects.all()
        context['disciplines'] = Discipline.objects.filter(speciality__slug=self.kwargs['slug']).select_related('speciality')
        return context


class DetailDisciplineLessonView(ListView):
    context_object_name = 'items'
    template_name = 'lesson/items.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['disciplines'] = Discipline.objects.filter(speciality__slug=self.kwargs['spec_slug']).select_related('speciality')
        context['specialities'] = Speciality.objects.all()
        context['posts'] = Lesson.objects.filter(discipline__slug=self.kwargs['slug'])
        return context

    def get_queryset(self):
        discipline = get_object_or_404(Discipline, slug=self.kwargs['slug'])
        return Lesson.objects.filter(discipline=discipline)


class LessonDetailView(DetailView):
    model = Lesson
    context_object_name = "lesson"
    template_name = 'lesson/lesson_detail.html'
    slug_field = 'slug'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['specialities'] = Speciality.objects.all()
        return context
