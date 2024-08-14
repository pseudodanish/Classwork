from django.shortcuts import render
# Create your views here.
from .models import Movie

def home(request):
    searchTitle=request.GET.get('searchTitle')
    # movies=Movie.objects.all()
    
    if searchTitle:
        movies=Movie.objects.filter(title__icontains=searchTitle)
    else:
        movies=Movie.objects.all()
    return render(request,'home.html',{"name" : "dragzy","search" : searchTitle,"movies":movies})

def about(request):
    seachTitle=request.GET.get('searchTitle')
    return render(request,"about.html",{"moviename":seachTitle})

def contact(request):
    searchTitle=request.GET.get('searchTitle')
    return render(request,"contact.html",{'search':searchTitle})


    
