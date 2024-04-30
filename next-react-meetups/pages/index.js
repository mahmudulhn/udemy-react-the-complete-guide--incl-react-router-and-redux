import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />

}

export default HomePage;