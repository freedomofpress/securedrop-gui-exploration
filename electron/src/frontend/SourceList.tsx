import { useAppDispatch, useAppSelector } from "./hooks";
import MOCK_DATA from "./mock_data"
import { set, clear } from "./features/sourcelist/sourcelistSlice";

export interface Source {
    journalist_designation: string,
    uuid: string,
}

interface Submission {
    filename: string,
    size: number,
    is_file: boolean,
    is_message: boolean,
    is_read: boolean,
    seen_by: string[],
    download_url: string,
    submission_url: string,
    source_url: string,
    uuid: string
}


function SourceList() {
    const sourcelist = useAppSelector((state) => state.sourcelist);
    const dispatch = useAppDispatch();
    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-md-3 col-lg-2 chat-sidebar">
                    <div className="p-3 border-bottom">
                        <h5 className="mb-0">
                            Sources
                        </h5>
                    </div>

                    <div className="sourcelist">
                        {MOCK_DATA.sources.map(SourceListItem)}
                    </div>
                </div>

                <div className="col-md-9 col-lg-10 sourcemain">
                    <div className="sourcemain-header">
                        <div className="d-flex align-items-center">
                            <div>
                                <h6 className="mb-0" id="sourcemain-title">{sourcelist.selected?.journalist_designation}</h6>
                            </div>
                        </div>
                    </div>

                    <div className="sourcemain-content">
                        {
                            sourcelist.selected ? (
                                <ul>
                                    {MOCK_DATA.submissions.filter(submission => submission.source_url.endsWith(sourcelist.selected.uuid)).map(SourceSubmissionItem)}
                                </ul>
                            ) : (
                                <div className="text-center">
                                    <h5>Placeholder</h5>
                                    <p className="text-muted">Select a source</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function SourceSubmissionItem(submission: Submission) {
    return (
        <li key={submission.uuid}>{submission.filename} ({submission.size} bytes)</li>
    )
}

function SourceListItem(source: Source) {
    const sourcelist = useAppSelector((state) => state.sourcelist);
    const dispatch = useAppDispatch();
    return (
        <div className="sourcelist-item p-3" key={source.uuid} onClick={() => dispatch(set({selected: source}))}>
            {source.journalist_designation}
        </div>
    )
}

export default SourceList;
