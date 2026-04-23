"""
Admin configuration for the core app of Nurtured Vine.
"""
from django.contrib import admin
from .models import CampRegistration, ContactMessage
from django.http import HttpResponse
import csv

@admin.register(CampRegistration)
class CampRegistrationAdmin(admin.ModelAdmin):
    """Admin interface for CampRegistration model."""
    list_display = ('full_name', 'email', 'age', 'participant_phone', 'created_at')
    search_fields = ('full_name', 'email', 'participant_phone')
    list_filter = ('gender', 'created_at')
    
    model = CampRegistration
    actions = ['export_as_csv']
    # Fields to display in admin form
    fields = [
        'full_name', 'email', 'age', 'participant_phone',
        'gender', 'address', 'interests',
        'challenge', 'created_at'
    ]

    # Fields to display in admin list view
    list_display = fields

    def export_as_csv(self, request, queryset):
        fieldnames = self.fields  # Use only selected fields

        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename=camp_registrations.csv'

        writer = csv.writer(response)
        writer.writerow(fieldnames)

        for obj in queryset:
            writer.writerow([
                getattr(obj, field) if getattr(obj, field) is not None else ''
                for field in fieldnames
            ])

        return response

    export_as_csv.short_description = 'Export selected registrations as CSV'

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    """Admin interface for ContactMessage model."""
    list_display = ('full_name', 'email', 'subject', 'created_at')
    search_fields = ('full_name', 'email', 'subject')
    list_filter = ('created_at',)
