from pydantic import BaseModel, Field
from fastapi import FastAPI, HTTPException
app = FastAPI()

class Project(BaseModel):
    id: int
    name: str = Field(min_length=1)
    description: str = Field(min_length=1)
    language: str | None = None

class ContactInput(BaseModel):
    name: str = Field(min_length=1)
    email: str = Field(min_length=3)
    message: str = Field(min_length=1)

contacts = []

projects = [
    Project(
        id=1,
        name="Toolbox Checkout Computer Vision",
        description="A computer vision project to check tools in",
        language="Python"
    ),
    Project(
        id=2,
        name="Colorectal Cancer Image Classification",
        description="An image classification project that uses cell scans",
        language="Python"
    )
]

@app.get("/projects")
def get_projects(limit: int =10):
    return {"projects": projects[:limit]}

@app.get("/projects/{project_id}")
def get_project(project_id: int):
    for project in projects:
        if project.id == project_id:
            return project

    raise HTTPException(
        status_code=404,
        detail="Project not found"
    )

@app.post("/contact", status_code=201)
def submit_contact(submission: ContactInput):
    contacts.append(submission)

    return {
        "message": "Contact submission received",
        "submission": submission
    }