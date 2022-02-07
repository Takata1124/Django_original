from re import sub
from django.shortcuts import render
from django.core.mail import EmailMessage, BadHeaderError
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect

import os

# Create your views here.
def index(request):
    val = 'GoodBy'
    return render(request, 'index.html', context={'value': val})

def base(request):
    
    return render(request, 'base.html')

def contact(request):
    context = {}
    if request.method == 'POST':

        subject = "ポートフォリオサイトよりお問い合わせがありました"
        message = """お問い合わせがありました。\n
        名前：{}\n内容：{}""".format(
            request.POST['name'],
            request.POST['textcontent']
        )
        print(message)
        from_email = request.POST['email']
        print(from_email)
        recipient_list = [ os.environ['DEFAULT_EMAIL_FROM'],]
        print(recipient_list)
        if subject and message and from_email:
            email = EmailMessage(subject, message, from_email, recipient_list)
            email.send()
            messages.success(request, 'お問い合わせいただきありがとうございます。')
        
        else:
            messages.success(request, '空欄があります。ご記入された上で送信をお願いします。')

    return render(request, 'contact.html', context)
