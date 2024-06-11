import { ref } from 'vue';
import { defineStore } from 'pinia';
import { fireAuth } from '@/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);

  async function initAuth() {
    onAuthStateChanged(fireAuth, (currentUser) => {
      console.log('Current User: ', currentUser);

      user.value = currentUser;
    });
  }

  async function login(email: string, password: string) {
    try {
      const usersCredentials = await signInWithEmailAndPassword(fireAuth, email, password);
      user.value = usersCredentials.user;
    } catch (error) {
      //TODO: add alert
      return Promise.reject(error);
    }
  }

  async function logout() {
    try {
      await signOut(fireAuth);
      user.value === null;
    } catch (error) {
      //TODO: add alert
      return Promise.reject(error);
    }
  }

  return { user, initAuth, login, logout };
});
