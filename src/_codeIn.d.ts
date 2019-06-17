interface CodeInContext {
    /** Retrieve modules registered in requiredModules */
    modules: any;
    /** Get field value of Form or List Item */
    getFieldValue: (field: string) => any;
    /** Set field value of Form or List Item */
    setFieldValue: (field: string, value: any) => void;
    formContext?: AkFCFormContext;
}

interface CodeInComp {
    /**
     * UI rendering method for Form Control or Page Widget
     */
    render?: (context: CodeInContext, fieldsValues: any, readonly: boolean) => any;

    /**
     * Script execution method for Form Action
     */
    async execute?: (context: CodeInContext, fieldsValues: any) => void;
    
    /**
     * Required fields will be passed by fieldsValues.  Re-render will be triggered if any changes to the registered fields.
     */
    requiredFields?: () => string[];
    
    /**
     * Required Modules will be injected via modules in CodeInContext
     */
    requiredModules?: () => string[];

    /**
     * Event to notify custom page to calculate height for Page Widget with auto height setting
     */
    onLoaded?: () => void;
}