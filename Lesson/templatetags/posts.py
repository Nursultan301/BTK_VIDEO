from django import template
from Lesson.models import Lesson

register = template.Library()


@register.inclusion_tag('lesson/popular_posts.html')
def get_popular(cnt=3):
    posts = Lesson.objects.order_by("-view").select_related('discipline__speciality', 'teacher')[:cnt]
    return {"posts": posts}


@register.inclusion_tag('lesson/new_video_posts.html')
def get_new_video(cnt=3):
    posts = Lesson.objects.order_by("-created_at").select_related('discipline__speciality', 'teacher')[:cnt]
    return {"posts": posts}