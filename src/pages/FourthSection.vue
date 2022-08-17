<template>
  <div class="q-my-xl row bg-image">
    <div class="page-header col-12">
      <h4>Get notified when we launch</h4>
    </div>

    <q-form @submit="submitForm" ref="form" class="col-12 form">
      <div class="flex justify-center submit-div">
        <q-input 
          class="input-field" 
          dark rounded outlined
          bg-color="secondary" v-model="inputField" placeholder="Email address"
          :error="showEmailError"
          :error-message="errorMessage"
          @blur="showEmailError = false"
        />
        <button type="submit" class="submit-btn">Get notified</button>
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FourthSection',
  setup() {

    const form = ref(null);
    const inputField = ref('');
    const errorMessage = ref('');
    const showEmailError = ref(false);

    const submitForm = (value) => {
      value.preventDefault();
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (inputField.value === '') {
        showEmailError.value = true;
        errorMessage.value = 'Oops! Please add your email';
      }
      else if (!regex.test(inputField.value)) {
        showEmailError.value = true;
        errorMessage.value = "Oops! That doesn't look like an email address";
      }
      else {
        showEmailError.value = false;
        errorMessage.value = "";
      }
    }

    return {
      form,
      errorMessage,
      inputField,
      showEmailError,
      submitForm
    }
  }
})
</script>

<style scoped>
.bg-image {
  background: url("/assets/bg-footer-squiggle.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
}
.page-header {
  margin-bottom: 20px;
  text-align: center;
}
.input-field {
  margin-right: 10px;
  width: 18%;
}
.submit-btn {
  background-color: #3EE9E5;
  border-radius: 90px;
  cursor: pointer;
  height: 57px;
  padding: 0px 30px;
  transition: all 0.3s ease;
}
.submit-btn:hover {
  background-color: transparent;
  border: 2px solid #3EE9E5;
  color: white;
}
.q-field--outlined:hover .q-field__control:before {
  border: 10px solid red;
}
@media screen and (max-width: 1200px) {
  .input-field {
    width: 35%;
  }
}

@media screen and (max-width: 738px) {
  .submit-div {
    flex-direction: column;
    align-items: center;
  }
  .input-field {
    width: 50%;
    margin-bottom: 20px;
  }
  .submit-btn {
    display: block;
    width: 50%;
    padding: 15px 0px;
  }
}
</style>