import { useEffect } from 'react';
import LeftPanel from './LeftPanel';
import Blocks from './Blocks';


const ContentWrapper = () => {

    let query = `query (
  $page: Int = 1
  $id: Int
  $type: MediaType
  $isAdult: Boolean = false
  $search: String
  $format: [MediaFormat]
  $status: MediaStatus
  $countryOfOrigin: CountryCode
  $source: MediaSource
  $season: MediaSeason
  $seasonYear: Int
  $year: String
  $onList: Boolean
  $yearLesser: FuzzyDateInt
  $yearGreater: FuzzyDateInt
  $episodeLesser: Int
  $episodeGreater: Int
  $durationLesser: Int
  $durationGreater: Int
  $chapterLesser: Int
  $chapterGreater: Int
  $volumeLesser: Int
  $volumeGreater: Int
  $licensedBy: [Int]
  $isLicensed: Boolean
  $genres: [String]
  $excludedGenres: [String]
  $tags: [String]
  $excludedTags: [String]
  $minimumTagRank: Int
  $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]
) {
  Page(page: $page, perPage: 20) {
    pageInfo {
      hasNextPage
    }
    media(
      id: $id
      type: $type
      season: $season
      format_in: $format
      status: $status
      countryOfOrigin: $countryOfOrigin
      source: $source
      search: $search
      onList: $onList
      seasonYear: $seasonYear
      startDate_like: $year
      startDate_lesser: $yearLesser
      startDate_greater: $yearGreater
      episodes_lesser: $episodeLesser
      episodes_greater: $episodeGreater
      duration_lesser: $durationLesser
      duration_greater: $durationGreater
      chapters_lesser: $chapterLesser
      chapters_greater: $chapterGreater
      volumes_lesser: $volumeLesser
      volumes_greater: $volumeGreater
      licensedById_in: $licensedBy
      isLicensed: $isLicensed
      genre_in: $genres
      genre_not_in: $excludedGenres
      tag_in: $tags
      tag_not_in: $excludedTags
      minimumTagRank: $minimumTagRank
      sort: $sort
      isAdult: $isAdult
    ) {
      id
      title {
        romaji
      }
    }
  }
}`

    useEffect(() => {
        async function fetchData() {

            const API_URL = 'https://graphql.anilist.co'

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        query: query,
                    })
                })
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Fetched data:", data);

            } catch (error) {
                console.error("Error fetching users:", error);
                return null;
            }
        }

        fetchData()
    }, [])


    return (
        <div className="min-h-0 bg-primary"> {/* This is defined to have a scrollable div as a child*/}
            <div className="grid grid-cols-[auto_1fr] gap-2 h-full"> {/* Main-Div */}

                <LeftPanel />

                <div className="bg-background rounded my-2 mr-2 overflow-y-auto"> {/*Right-Main Content */}
                    <div className='app py-5'>
                        <Blocks />
                        <hr className='my-5' />
                        
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContentWrapper