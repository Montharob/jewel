<template>
    <div>
        Email : <input type="Email">
    </div>
</template>

<script setup>
import { ref } from vue
import {
    getAuth,
    signInwithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
</script>