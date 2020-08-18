from django.db import models
from django.contrib.postgres.fields import ArrayField

from django.contrib.auth.models import User


class UserData(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    userName = models.CharField(max_length=100)
    theme = models.CharField(max_length=10, blank=True)
    profilePicture = models.CharField(max_length=250)
    shadowText = models.CharField(max_length=100)
    firstIntro = models.CharField(max_length=125)
    secondIntro = models.CharField(max_length=250)
    skills = ArrayField(
        models.CharField(max_length=50, blank=True),
        blank=True
    )
    socialLinks = ArrayField(
        ArrayField(
            models.CharField(max_length=150, blank=True),
            blank=True
        ),
        blank=True
    )
    projects = ArrayField(
        ArrayField(
            models.CharField(max_length=250, blank=True),
            blank=True
        ),
        blank=True
    )

    def __str__(self):
        return self.userName
