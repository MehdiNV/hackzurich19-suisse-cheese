from django.db import models


# Create your models here.
class Articles(models.Model):
    title = models.CharField(max_length=200)
    timestamp = models.DateTimeField()

    def __str__(self):
        return self.title
