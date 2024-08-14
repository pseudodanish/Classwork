from django.db import models

# Create your models here.
class News(models.Model):
    title=models.CharField(max_length=100)
    desc=models.CharField(max_length=255)
    date=models.DateField(auto_created=True) 