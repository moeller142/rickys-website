export default function PageContainer() {
    return (
        <div className='page'>
        <Switch>
            <Route path='/events'>
                <Events />
            </Route>
            <Route path='/discography'>
                <Discography />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/gear'>
                <Gear />
            </Route>
            <Route path='/backing-tracks'>
                <BackingTracks />
            </Route>
            <Route path='/media'>
                <Media />
            </Route>
            <Route path='/lessons'>
                <Lessons />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>

    </div>
    )
}