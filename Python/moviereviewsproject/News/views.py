from django.shortcuts import render
from .models import News
# Create your views here.
def home(request):
    news=News.objects.all()
    return render(request,'news.html',{"news":news})