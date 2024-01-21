<template>
  <section class="pb-20">
    <Container>
       <h3 class="font-bold text-lg sm:text-xl lg:text-3xl text-center mb-10">
         {{$t('contact_person')}}
       </h3>
      <GridLists :people="people"/>
    </Container>
  </section>
</template>

<script setup lang="ts">
import GridLists from "~/components/GridLists.vue";
import Container from "~/components/partials/Container.vue";



interface Person {
  name: string;
  title: string;
  role: string;
  email: string;
  telephone: string;
  imageUrl: string;
}
const people: person[] = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Test Cooper',
    title: 'Regional Paradigm Technician',
    role: 'user',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'People Cooper',
    title: 'Regional Paradigm Technician',
    role: 'admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },  {
    name: 'People Cooper',
    title: 'Regional Paradigm Technician',
    role: 'user',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
 {
    name: 'People Cooper',
    title: 'Regional Paradigm Technician',
    role: 'user',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
]
</script>
