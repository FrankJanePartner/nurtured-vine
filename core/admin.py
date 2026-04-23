"""
Admin configuration for the core app of Nurtured Vine.
"""
import csv

from django.contrib import admin
from django.http import HttpResponse

from .models import CampRegistration, ContactMessage

@admin.register(CampRegistration)
class CampRegistrationAdmin(admin.ModelAdmin):
    """Admin interface for CampRegistration model."""
    list_display = (
        'full_name', 'email', 'age', 'participant_phone',
        'participant_location', 'created_at'
    )
    search_fields = ('full_name', 'email', 'participant_phone')
    list_filter = ('gender', 'created_at')

    model = CampRegistration
    actions = ['export_as_csv']
    # Fields to display in admin form
    fields = [
        'full_name', 'email', 'age', 'participant_phone',
        'participant_location', 'gender', 'parent_name',
        'parent_phone', 'parent_location', 'church_name',
        'medical_info', 'consent', 'created_at'
    ]
    readonly_fields = ('created_at',)

    def export_as_csv(self, _request, queryset):
        """Export selected registrations as a CSV file."""
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
