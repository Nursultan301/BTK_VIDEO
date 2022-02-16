from django import forms
from django.contrib import admin
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from .models import Speciality, Discipline, Lesson


class LessonAdminForm(forms.ModelForm):
    description = forms.CharField(label='Описание', widget=CKEditorUploadingWidget())

    class Meta:
        model = Lesson
        fields = '__all__'


class DisciplineAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


class TeacherAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('last_name',)}


admin.site.register(Discipline, DisciplineAdmin)


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    form = LessonAdminForm
    save_on_top = True
    list_display = ('title', 'discipline', 'teacher', 'created_at', 'updated_at',)
    # fields = ('title', 'slug', 'url', 'description', 'discipline', 'teacher', )
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        (None, {
            'fields': (('title', 'slug'), )
        }),
        (None, {
            'fields': (('url', ),)
        }),
        (None, {
            'fields': (('image',),)
        }),
        (None, {
            'fields': (('description',),)
        }),
        (None, {
            'fields': (('discipline',),)
        }),
        (None, {
            'fields': (('teacher',),)
        }),

    )


@admin.register(Speciality)
class SpecialityAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


