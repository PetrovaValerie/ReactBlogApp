import React, {ReactElement} from "react";
import {Tabs, TabsCol} from "./tabsStyle";
import {CardItem} from "./cards";

export const TabList = (): ReactElement => {
    return (
        <Tabs>
            <h1>Blog</h1>
            <TabsCol>
                <li>
                    <span>All</span>
                    <div>
                            <CardItem/>
                    </div>
                </li>

                {/*<li>*/}
                {/*    <span>My favorites</span>*/}
                {/*</li>*/}

                {/*<li>*/}
                {/*    <span>Popular</span>*/}
                {/*</li>*/}
            </TabsCol>

        </Tabs>
    )
}