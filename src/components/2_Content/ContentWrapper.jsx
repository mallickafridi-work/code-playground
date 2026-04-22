import React from 'react'
import Blocks from '../Blocks';
import FakeAPI from '../FakeAPI';
import LeftPanel from './Content_Components/LeftPanel';

const ContentWrapper = () => {

    return (
        <div className="min-h-0"> {/* This is defined to have a scrollable div as a child*/}
            <div className="grid grid-cols-[auto_1fr] gap-2 h-full"> {/* Main-Div */}

                <LeftPanel />

                <div className="border-2 my-2 mr-2 overflow-y-auto"> {/*Right-Main Content */}
                    <div className='app py-5'>
                        <Blocks />
                        <hr className='my-5' />
                        <FakeAPI />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentWrapper