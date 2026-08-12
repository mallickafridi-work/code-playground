import LeftPanel from './LeftPanel';
import Blocks from './Blocks';
import Todo from './Todo';

const ContentWrapper = () => {

    return (
        <div className="min-h-0 bg-primary"> {/* This is defined to have a scrollable div as a child*/}
            <div className="grid grid-cols-[auto_1fr] gap-2 h-full"> {/* Main-Div */}

                <LeftPanel />

                <div className="bg-background rounded my-2 mr-2 overflow-y-auto"> {/*Right-Main Content */}
                    <div className='app py-5'>
                        <Blocks />
                        <hr className='my-5' />
                        <Todo />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContentWrapper