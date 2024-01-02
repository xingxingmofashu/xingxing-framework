<template>
    <nav px4 py2 text-lg border="b base" flex="~ gap-1 items-center">
        <NuxtLink to="/" title="Framework" rounded p2 hover="bg-active">
            <div i-logos-nuxt-icon h-1.5rem w-1.5rem />
        </NuxtLink>
        <div flex-auto />
        
        <ColorSchemeToggle />
        <NuxtLink rounded p2 title="GitHub" hover="bg-active" href="https://github.com/xingxingmofashu/xingxing-frame" target="_blank">
            <div i-carbon-logo-github text-2xl />
        </NuxtLink>
    </nav>
</template>