import getGuestbookEntry from '@/lib/getGuestbookEntry'
import MainLayout from '@/components/MainLayout'

export default function EntryPage({ entry }) {
  return (
    <MainLayout>
      {console.log(entry)}
    </MainLayout>

  )
}

export function getStaticProps(req){
  return {
    props:
  }
}