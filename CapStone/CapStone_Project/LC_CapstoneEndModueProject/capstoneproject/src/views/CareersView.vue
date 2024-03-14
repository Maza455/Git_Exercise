<template>
    <section id="search">
        <div style="background-color: #232F3E!important;padding:40px 80px">
            <h2 style="color:white">Let me help you on finding a Jobs</h2>
            <div style="margin-top: 15px" class="row">
                <div class="col-md-8">
                    <input type="text" class="form-control" placeholder="Search for jobs by its title or keyword">
                </div>
                <div class="col-md-3">
                    <input type="text" class="form-control" placeholder="Location">
                </div>
                <div class="col-md-1">
                    <button @click="searchJobs" type="button" class="btn btn-warning"><i class="fa fa-search"
                            aria-hidden="true"></i></button>
                </div>
            </div>
        </div>

        <!-- Other sections -->

        <div style="background-color: #005276;padding:40px 80px">
            <h1 style="color:white;font-size: 55px">Come build the future with me</h1>
            <p style="color:white;margin-right: 200px;font-size: 18px;margin-top: 40px">My mission is to be Earth's most
                customer-centric company. This is what unites Amazonians across teams and geographies as we are all
                striving to delight our customers and make their lives easier, one innovative product, service, and idea
                at a time.</p>
            <button @click="learnMore" type="button" class="btn btn-outline-light">Learn about working at Zukiisa
                Maza</button>
            <br><br>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        searchJobs() {
            // Add functionality for searching jobs
            console.log('Searching for jobs...');
        },
        learnMore() {
            // Add functionality for learning more about working at Zukiisa Maza
            console.log('Learn more about working at Zukiisa Maza');
        }
    }
};
</script>

<style scoped>


</style>
