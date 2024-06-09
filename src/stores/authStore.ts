import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fireAuth } from '@/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);

  function initAuth() {
    onAuthStateChanged(fireAuth, (currentUser) => {
      user.value = currentUser;
    });
  }

  async function login(email: string, password: string) {
    try {
      const usersCredentials = await signInWithEmailAndPassword(fireAuth, email, password);
      user.value = usersCredentials.user;
    } catch (error) {
      //TODO: add alert
      console.log('Login Error: ', error);
    }
  }

  async function logout() {
    try {
      await signOut(fireAuth);
      user.value === null;
    } catch (error) {
      //TODO: add alert
      console.log('Logout Error: ', error);
    }
  }

  return { user, initAuth, login, logout }
});
