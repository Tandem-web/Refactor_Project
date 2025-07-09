import TabProvider from "../../features/Todo-list/context/TabProvider";
import ToDo from "../../features/Todo-list";
import '../../shared/styles/page/page.scss'


const ProjectPage = () => {
    return(
        <>
            <div className="page-breadcrumbs">
                Страница проектов
            </div>

            {/* <section>
                <div className="section-name">1. To-do List</div>
                <div className="section-inner">
                    <TabProvider>
                        <ToDo/>
                    </TabProvider>      
                </div>
            </section> */}
        </>
    )
}

export default ProjectPage