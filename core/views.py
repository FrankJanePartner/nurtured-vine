"""
Views for the core app of Nurtured Vine.
"""
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import CampRegistration, ContactMessage

def index(request):
    """Render the index page."""
    return render(request, "index.html")

def contact(request):
    """Handle contact form submission and render the contact page."""
    if request.method == "POST":
        full_name = request.POST.get('full_name')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone_number')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        ContactMessage.objects.create( # type: ignore
            full_name=full_name,
            email=email,
            phone_number=phone_number,
            subject=subject,
            message=message
        )
        
        messages.success(request, "Your message was sent successfully!")
        return redirect('contact')
        
    return render(request, "contact.html")

def about(request):
    """Render the about page."""
    return render(request, "about.html")

def donate(request):
    """Render the donate page."""
    return render(request, "donate.html")

def register(request):
    """Handle registration form submission and render the register page."""
    if request.method == "POST":
        full_name = request.POST.get('full_name')
        age = request.POST.get('age')
        email = request.POST.get('email')
        participant_phone = request.POST.get('participant_phone')
        participant_location = request.POST.get('participant_location')
        gender = request.POST.get('gender')
        parent_name = request.POST.get('parent_name')
        parent_phone = request.POST.get('parent_phone')
        parent_location = request.POST.get('parent_location')
        church_name = request.POST.get('church_name')
        medical_info = request.POST.get('medical_info')
        consent = request.POST.get('consent') == 'on'

        CampRegistration.objects.create(  # type: ignore
            full_name=full_name,
            age=age,
            email=email,
            participant_phone=participant_phone,
            participant_location=participant_location,
            gender=gender,
            parent_name=parent_name,
            parent_phone=parent_phone,
            parent_location=parent_location,
            church_name=church_name,
            medical_info=medical_info,
            consent=consent
        )

        messages.success(request, "Your registration was successful!")
        return redirect('register')

    return render(request, "register.html")

def thelightcamp(request):
    """Render the Light Camp page."""
    return render(request, "thelightcamp.html")

def gallery(request):
    """Render the gallery page."""
    return render(request, "gallery.html")
