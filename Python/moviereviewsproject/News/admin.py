from django.contrib import admin

# Register your models here.
from .models import News

admin.site.register(News)
# class MovieAdmin(admin.ModelAdmin):
#     list_display = ('name', 'description')
#     search_fields = ('name',)
