<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <NuxtLink class="navbar-brand" to="/">KikuChannel</NuxtLink>
               
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" >
                        <NuxtLink class="nav-link" activeClass="active" aria-current="page" to="/">Home</NuxtLink>
                        <NuxtLink class="nav-link" activeClass="active" to="/secondpage">Secondpage</NuxtLink>
                        <NuxtLink class="nav-link" activeClass="active" to="/thirdpage">Thirdpage Composables sample</NuxtLink>
                        <NuxtLink class="nav-link" activeClass="active" to="/fishdata">Fishdata</NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>