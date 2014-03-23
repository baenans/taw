from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'TAW.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'www.views.home', name='home'),
    url(r'^login/$', 'www.views.login_view', name='login'),
    url(r'^user/$', 'www.views.user', name='user'),
    url(r'^user/edit/$', 'www.views.user_edit', name='user_edit'),
    url(r'^user/citas/$', 'www.views.citas', name='citas'),
    url(r'^user/citas/ask/$', 'www.views.citas_ask', name='citas_ask'),
    url(r'^user/tratamientos/$', 'www.views.tratamientos', name='tratamientos'),
    url(r'^team/$', 'www.views.team', name='team'),
)
