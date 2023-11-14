<template>
    <v-app>
        <v-app-bar app>
            <v-app-bar-nav-icon @click.stop="rail = !rail" />
            <v-toolbar-title style="width: 250px" class="ml-0 pl-4">
                Made ID
            </v-toolbar-title>
            <v-spacer />
            <v-text-field flat solo-inverted hide-details append-icon="mdi-magnify" label="Search" class="hidden-sm-and-down border-12 ma-0 pa-0" style="background: rgba(255, 255, 255, 0.16);" v-model="search"/>
            <v-spacer />
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
        >
            <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
            >
            <template v-slot:append>
                <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
                ></v-btn>
            </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main></v-main>
    </v-app>
</template>
  
<script>
export default {
    name: 'App',
    data(){
        return {
            drawer: true,
            rail: true,
            title: "Vuetify",
            search: ''
        }
    },
    mounted(){
    },
    methods: {
    },
    beforeDestroy() {
    },
    created() {
    }
}
</script>