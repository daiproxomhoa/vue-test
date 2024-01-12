<script setup lang="ts">
import type { FormInstance } from 'element-plus';
import { ElForm, ElNotification } from 'element-plus';
import { reactive, ref } from 'vue';
import { request } from './api';
import { authState } from './store/auth';

const formRef = ref<FormInstance>()


const form = reactive({ email: 'daivt@bfast.dev', password: 'Test123456' })

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        console.log(fields);
        if (valid) {
            request.post("/api/Accounts/login?include=user", form).then(() => {
                authState.login()
            }).catch((e) => {
                console.log(e);

                ElNotification({
                    title: 'Error',
                    message: e.response.data.error.message,
                    type: 'error',
                })
            })
        } else {

            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

<template>
    <div class="w-screen h-screen flex items-center justify-center">
        <div class="rounded-lg p-16 bg-white flex flex-col text-center">
            <p class="text-4xl font-bold mb-4"> Daivt VueTS ver 3.0</p>
            <ElForm ref="formRef" :model="form" label-position="left" label-width="100px">
                <el-form-item label="Email" prop="email" :rules="[
                    { required: true, message: 'Email is required', },
                ]">
                    <el-input v-model="form.email" />
                </el-form-item>
                <el-form-item label="Password" prop="password" :rules="[
                    { required: true, message: 'Password is required' },
                ]">
                    <el-input v-model="form.password" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
                    <el-button @click="resetForm(formRef)">Reset</el-button>
                </el-form-item>
            </ElForm>
        </div>
    </div>
</template>

<style lang="scss"></style>