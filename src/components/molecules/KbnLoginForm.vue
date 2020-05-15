<template>
  <form novalidate>
    <div class="form-item">
      <label for="email">メールアドレス</label>
      <input
        id="email"
        v-model="email"
        type="text"
        autocomplete="off"
        placeholder="例: kanban@domain.com"
        @focus="resetError">
      <ul class="validation-errors">
        <li v-if="!validation.email.format">メールアドレスの形式が不正です。</li>
        <li v-if="!validation.email.required">メールアドレスが入力されていません。</li>
      </ul>
    </div>
    <div class="form-item">
      <label for="password">パスワード</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="off"
        placeholder="例: xxxxxxxx"
        @focus="resetError">
      <ul class="validation-errors">
        <li v-if="!validation.password.required">パスワードが入力されていません。</li>
      </ul>
    </div>
    <div class="form-actions">
      <KbnBUtton
        :disabled="disableLoginAction"
        @click="handleClick"
      >
        ログイン
      </KbnBUtton>
      <p
        v-if="progress"
        class="login-progress"
      >
        ログイン中...
      </p>
      <p
      v-if="error"
      class="login-error"
      >
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>