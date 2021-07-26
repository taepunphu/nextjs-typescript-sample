import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import { IActivity } from "../models/activity"

export class ActivityStore {
    activityRegistry = new Map()
    activities: IActivity[] = [];
    loadingInitial = false;
    activity: IActivity | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    get activitiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) =>
            a.date!.getTime() - b.date!.getTime());
    }

    loadActivities = async () => {
        this.loadingInitial = true;
        try {
            const activities = await agent.Activities.list()
            runInAction(() => {
                activities.forEach((activity) => {
                    activity.date = activity.date.split('.')[0];
                    this.activityRegistry.set(activity.id, activity)
                  });
                  this.loadingInitial = false;
            })
        } catch(error) {
            runInAction(() => {
                this.loadingInitial = false;
            })
            console.log(error);
        }
    };
}

export default createContext(new ActivityStore())
