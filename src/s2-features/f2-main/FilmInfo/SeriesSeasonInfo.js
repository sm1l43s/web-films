import {Collapse, ConfigProvider} from "antd";
import {CaretRightOutlined} from '@ant-design/icons';
import classes from "./FilmInfo.module.css";

const {Panel} = Collapse;

function SeriesSeasonInfo({seasonInfo}) {
    let panels = seasonInfo.map(item => {
        return <Panel style={{
            backgroundColor: "#2b2b31", margin: "5px 0px"
        }} header={`Сезон: ${item.number}`} key={item.number}>
            <table className={classes.accordionList}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Дата релиза</th>
                </tr>
                </thead>
                {item.episodes.map(episode => {
                    return (<tbody>
                    <tr>
                        <th>{episode.episodeNumber}</th>
                        <td>{episode.nameRu ?? episode.nameEn}</td>
                        <td>{episode.releaseDate}</td>
                    </tr>
                    </tbody>)
                })}
            </table>
        </Panel>
    })

    return (
        <>
            <ConfigProvider theme={{
                components: {
                    Collapse: {
                        colorBorder: "#2b2b31",
                        colorTextHeading: "rgba(255,255,255,0.7)",
                        fontSize: 16
                    },
                }
            }}>
                <Collapse size={"small"}
                          bordered={false}
                          expandIcon={({isActive}) =>
                              <CaretRightOutlined
                                  style={{color: "#ff55a5"}}
                                  rotate={isActive ? 90 : 0}/>
                          }
                          style={{width: 370}}>
                    {panels}
                </Collapse>
            </ConfigProvider>
        </>
    );
}

export default SeriesSeasonInfo;