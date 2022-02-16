from django.urls import path

from .views import DetailDisciplineLessonView, HomeView, DetailSpecialityView, LessonDetailView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('lesson/<slug:slug>/', LessonDetailView.as_view(), name='lesson_detail'),
    path('<slug:spec_slug>/discipline/<slug:slug>/', DetailDisciplineLessonView.as_view(), name='discipline'),
    path('speciality/<slug:slug>/', DetailSpecialityView.as_view(), name='speciality'),
]