from django.contrib import admin
from .models import Teacher


class TeacherAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('last_name',)}


admin.site.register(Teacher, TeacherAdmin)

