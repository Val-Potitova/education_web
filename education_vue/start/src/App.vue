<!-- lesson 4
  <template>
  <input type="text" v-model="userName" placeholder="Name">
  <input type="password" v-model="userPass" placeholder="Password">
  <input type="email" v-model="userEmail" placeholder="E-mail">
  <p className="error">{{ error }}</p>
  <button @click="sendData()">Send</button>

  <div v-if="users.length === 0" className="user">
    Users not exist
  </div>
  <div v-else-if="users.length === 1" className="user">
    Users has 1 element
  </div>
  <div v-else className="user">
    Users has more than 1 element
  </div>

  <div v-for="(el, index) in users" :key="index" className="user">
    <h3>{{ el.name }}</h3>
    <p>{{ el.email }} - {{ el.pass }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      error: '',
      userName: '',
      userPass: '',
      userEmail: '',

    }
  },
  methods: {
    sendData() {
      if(this.userName === '') {
        this.error = 'Name not exist';
        return;
      } else if(this.userPass === '') {
        this.error = 'Password not exist';
        return;
      } else if(this.userEmail === '') {
        this.error = 'E-mail not exist';
        return;
      }

      this.error = '';

      this.users.push({
        name: this.userName,
        pass: this.userPass,
        email: this.userEmail,
      })

      this.userName = this.userPass = this.userEmail = ''
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  margin: 10px;
}

.user {
  width: 300px;
  border: 1px solid;
  padding: 5px 20px;
  margin: 20px;
}
</style> -->

<!-- lesson 5 -->
<template>
  <input type="text" v-model="userName" placeholder="Name">
  <input type="password" v-model="userPass" placeholder="Password">
  <input type="email" v-model="userEmail" placeholder="E-mail">
  <p className="error">{{ error }}</p>
  <button @click="sendData()">Send</button>

  <div v-if="users.length === 0" className="user">
    Users not exist
  </div>
  <div v-else-if="users.length === 1" className="user">
    Users has 1 element
  </div>
  <div v-else className="user">
    Users has {{ users.length }} elements
  </div>

  <User v-for="(el, index) in users" :key="index" :user="el" :index="index" :deleteUser="deleteUser"/>
</template>

<script>
import User from './components/User.vue'

export default {
  components: { User },
  data() {
    return {
      users: [],
      error: '',
      userName: '',
      userPass: '',
      userEmail: '',

    }
  },
  methods: {
    sendData() {
      if(this.userName === '') {
        this.error = 'Name not exist';
        return;
      } else if(this.userPass === '') {
        this.error = 'Password not exist';
        return;
      } else if(this.userEmail === '') {
        this.error = 'E-mail not exist';
        return;
      }

      this.error = '';

      this.users.push({
        name: this.userName,
        pass: this.userPass,
        email: this.userEmail,
      })

      this.userName = this.userPass = this.userEmail = ''
    },

    deleteUser(index) {
      this.users.splice(index, 1);
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  margin: 10px;
}

.user {
  width: 300px;
  border: 1px solid;
  padding: 5px 20px;
  margin: 20px;
}

.error {
  color: red;
}
</style>