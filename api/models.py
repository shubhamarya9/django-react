from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=255)
    birth_date = models.DateField()

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True)
    release_date = models.DateField()
    author = models.ForeignKey('author', on_delete=models.SET_NULL, null=True)
