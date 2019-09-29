from django.db import models


# Create your models here.
class Articles(models.Model):
    title = models.CharField(max_length=200, default=None)
    timestamp = models.DateTimeField(default=None)
    body = models.CharField(max_length=1000, default=None)
    journal = models.CharField(max_length=200, default=None)

    def __str__(self):
        return self.title
