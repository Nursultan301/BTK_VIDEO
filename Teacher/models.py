from django.db import models


class Teacher(models.Model):
    """ Преподаватель """
    last_name = models.CharField('Имя', max_length=255)
    first_name = models.CharField('Фамиля', max_length=255)
    full_name = models.CharField('Очество', max_length=255, blank=True)
    slug = models.SlugField('URL')
    image = models.ImageField('Фото', upload_to='teacher/%Y/%m/%d/', blank=True)

    def __str__(self):
        return "{}  {}  {}".format(self.last_name, self.first_name, self.full_name)

    class Meta:
        verbose_name = 'Преподаватель'
        verbose_name_plural = 'Преподаватели'
