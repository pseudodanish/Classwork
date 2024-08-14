from django.contrib import admin
from django.urls import path
from .views import home
from .views import about
from .views import contact

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home),
    path('about.html/',about),
    path('contact.html/',contact),
]