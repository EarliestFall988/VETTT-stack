


<script setup lang="ts">
import useApi from '@/lib/trpc-composable';
// const { data: hiMessageResult } = useApi().messages.HelloMessage.useQuery({ hiMessage: 'World' })

const newMessage = defineModel("");

const getMessages = useApi().messages.GetAllMessages.invalidate;

const {mutate} = useApi().messages.SendMessage.useMutation({
    onSuccess() {
        void getMessages();
        newMessage.value = "";
    },
});

const {data: messages} = useApi().messages.GetAllMessages.useQuery();

const sendMessage = () => {
    const strResult = newMessage.value as string;
    mutate({
        message: strResult
    })
}

</script>


<template>
    
        <!-- <p class="">Hello Message Result: {{ hiMessageResult }}</p> -->
        <div class="py-5 flex gap-2">
            <input v-model="newMessage" type="text" placeholder="enter text" class="py-1 rounded-lg w-1/2 px-3 bg-zinc-700 text-white outline-none ring-zinc-600 ring-1 hover:ring focus:ring-blue-600 transition duration-200"/>
            <button @click="sendMessage" class="p-1 px-3 rounded-full bg-blue-700 text-zinc-200">Send</button>
        </div>
        <p>Messages</p>
   <div class="border-t border-zinc-600">
    <div class="border-x border-zinc-600 border-b p-2" :key="index" v-for="(item, index) in messages">
      {{ item }}
    </div>
   </div>
</template>