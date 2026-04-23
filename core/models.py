"""
Models for the core app of Nurtured Vine.
"""
from django.db import models

class CampRegistration(models.Model):
    """Model representing a registration for the Light Camp."""
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]

    full_name = models.CharField(max_length=255)
    age = models.IntegerField()
    email = models.EmailField()
    participant_phone = models.CharField(max_length=20)
    participant_location = models.CharField(max_length=255)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    
    parent_name = models.CharField(max_length=255)
    parent_phone = models.CharField(max_length=20)
    parent_location = models.CharField(max_length=255)
    church_name = models.CharField(max_length=255)
    
    medical_info = models.TextField(blank=True, null=True)
    consent = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.email}"

class ContactMessage(models.Model):
    """Model representing a contact form submission."""
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    subject = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField()
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.full_name} - {self.subject}"
