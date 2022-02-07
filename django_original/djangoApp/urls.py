from django.urls import path
from . import views

app_name = 'template_app'

urlpatterns = [
    path('views', views.index, name='index'),
    path('base', views.base, name='base'),
    path('contact', views.contact, name='contact')
]