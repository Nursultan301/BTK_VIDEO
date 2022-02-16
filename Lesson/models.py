import os
from django.db import models
from django.urls import reverse
from embed_video.fields import EmbedVideoField


class Speciality(models.Model):
    """ Специальность """
    name = models.CharField('Называние', max_length=255)
    slug = models.SlugField(null=True, blank=True)

    objects = models.Manager()

    def get_absolute_url(self):
        return reverse("speciality", kwargs={"slug": self.slug})
    
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Специальность'
        verbose_name_plural = 'Специальности'


class Discipline(models.Model):
    """ Дисциплена """
    COURSE = (
        ('1', '1-Курс'),
        ('2', '2-Курс'),
        ('3', '3-Курс'),
    )
    name = models.CharField('Называние', max_length=255)
    slug = models.SlugField("URl", unique=True)
    speciality = models.ForeignKey(Speciality, on_delete=models.CASCADE, verbose_name='Специальность')
    course = models.CharField('Курс', max_length=20, choices=COURSE)

    objects = models.Manager()

    def get_absolute_url(self):
        return reverse("discipline", kwargs={"spec_slug": self.speciality.slug, "slug": self.slug})

    def __str__(self):
        return "{} : {}".format(self.speciality.name, self.name)

    def course_v(self):
        return dict(self.COURSE)[self.course]

    class Meta:
        verbose_name = 'дисциплина'
        verbose_name_plural = 'дисциплина'


class Lesson(models.Model):
    """ Урок """
    title = models.CharField("Называние", max_length=255)
    slug = models.SlugField('slug',)
    description = models.TextField('Описание')
    image = models.ImageField('Изображение', upload_to='lesson/%Y/%m/%d/')
    url = EmbedVideoField('Url-адрес видео')
    view = models.IntegerField('Кол-во просмотров', default=0)
    created_at = models.DateTimeField('Дата публикации', auto_now_add=True)
    updated_at = models.DateTimeField('Обновлено', auto_now=True)
    discipline = models.ForeignKey(Discipline, on_delete=models.CASCADE, verbose_name='Дисциплина')
    teacher = models.ForeignKey("Teacher.Teacher", on_delete=models.CASCADE, verbose_name='Преподаватель')

    objects = models.Manager()

    def get_absolute_url(self):
        return reverse('lesson_detail', kwargs={'slug': self.slug})

    def type_video(self):
        return os.path.basename(self.video.name).split('.')[-1].replace(' ', '').lower()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Урок'
        verbose_name_plural = 'Уроки'
