from django.urls import path
from app_portfolio import views

urlpatterns = [
    path('', views.home, name='home'),
    path('historia/', views.historia, name='historia'),
]
