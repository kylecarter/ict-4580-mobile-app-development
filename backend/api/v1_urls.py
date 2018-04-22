# Contrib
from django.urls import path

# Custom
from . import views

urlpatterns = [
    path( 'verify/', views.verify, name='verify' ),
]
