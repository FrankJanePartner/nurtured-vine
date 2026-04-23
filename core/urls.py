from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("contact/", views.contact, name="contact"),
    path("about/", views.about, name="about"),
    path("donate/", views.donate, name="donate"),
    path("register/", views.register, name="register"),
    path("thelightcamp/", views.thelightcamp, name="thelightcamp"),
    path("gallery/", views.gallery, name="gallery"),
]
